import { StudentInfo } from "./interfaces";

const url = "http://localhost:8080"; // Ensure this points to your Express server

export async function createStudent(studentInfo: StudentInfo) {
    let response = await fetch(url + '/api/createStudent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentInfo),
    });
    let resText = await response.text();
    return JSON.parse(resText); // Handle parsing based on your server's response
}
