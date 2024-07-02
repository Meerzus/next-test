import {NextResponse} from "next/server";
import {query} from "@/lib/db";
import mysql from "mysql2/promise";

let message = ''

export async function GET(){
    const info = await query({
        query: 'SELECT * FROM info',
        values: []
    })

    return NextResponse.json(info)
}

export async function POST(req, res) {
    const {testVal} = req.body

    const sanitizedData = {
        testVal: testVal !== undefined ? testVal : null
    };

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    });

    const query = 'INSERT INTO testing (testVal) VALUES (?)';

    await connection.execute(query, [sanitizedData.testVal], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json({ message: 'User added successfully', results });
    });

    // const addTest = await query({
    //     // query: 'INSERT INTO info (city) VALUES (?)',
    //     query: 'INSERT INTO testing (testVal) VALUES (?)',
    //     values: [testVal !== undefined ? testVal : null]
    // })
    //
    const info = await query({
        query: 'SELECT * FROM testing',
        values: []
    })

    // if (addTest.insertId) {
    //     message = "Success"
    // } else message = "Error"

    // let test = {
    //     id: addTest.insertId,
    //     testVal: testBody
    // }

    return NextResponse.json(info)
}