import { Router } from "express";
import axios from 'axios';

const END_POINT = "https://mempool.space";

const router = Router();

router.get('/isp-ranking', async (req, res) => {
    console.log('get isp ranking data');
    await axios.get(`${END_POINT}/api/v1/lightning/nodes/isp-ranking`)
            .then(response => {
                console.log(response.data);
                res.json(response.data);
            })
            .catch(err => {
                console.log(err);
            })
});

export default router;