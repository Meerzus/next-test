import {NextResponse} from "next/server";
import {query} from "@/lib/db";

export async function GET(){
    const test = await query({
        query: '',
        values: []
    })

    return NextResponse.json({name: 'query testing'})
}