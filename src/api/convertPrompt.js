// converPrompt.js for onClickConvert
import axios from 'axios';

const ENDPOINT_URL = 'https://sgtaowebapi-1-b9620003.deta.app/api/gpttemplate/prompt'

const converPrompt = {
    async post(todo) {
        const result = await axios.post(ENDPOINT_URL, todo);
        return result.data;
    },
}

export default converPrompt;