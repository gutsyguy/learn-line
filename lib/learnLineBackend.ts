import { StudentInfo } from "./interfaces";

const url = "localhost:8080"

export async function bubbelApiJoinClub(req: StudentInfo) {
    let fetchRes = await fetch(url + '/api/createStudent', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify(req),
    });
    let resText = await fetchRes.text();
    return JSON.parse(resText);
}