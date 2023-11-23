// convertPrompt.test.js
import axios from 'axios';
import convertPrompt from '../api/convertPrompt'; // テスト対象のモジュールをインポート

// axiosをモック化
jest.mock('axios');

const test_URL = 'https://sgtaowebapi-1-b9620003.deta.app/api/gpttemplate/prompt';

describe('test convertPrompt', () => {
    afterEach(() => jest.restoreAllMocks())
    it('post function should make a POST request and return data', async () => {

        // axiosモックの振る舞いを設定
        const testData = { prompt: "testDataResponse"};
        axios.post.mockResolvedValue({
            "status": 200,
            "data": testData,
        });

        // 引数設定
        const todo = {
            "type": "000_test",
            "data01": "test",
        }

        const result = await convertPrompt.post(todo);

        // axios.postが1回呼び出されたことを検証
        expect(axios.post).toHaveBeenCalledTimes(1);
        // axios.postメソッドが正しく呼び出されたかどうかを確認
        expect(axios.post).toHaveBeenCalledWith(
            test_URL,
            todo
        );
        // 期待されるデータと一致することを確認
        expect(result).toEqual(testData);
    });
});