import {NextResponse} from "next/server";
import {query} from "@/lib/db";

export async function GET(){
    const appliances = await query({
        query: 'SELECT * FROM appliances',
        values: []
    })

    return NextResponse.json(appliances)
}

export async function POST(req) {
    const applianceType = req.body.appliance_type
    const addAppliance = await query({
        query: 'INSERT INTO appliances (appliance_type) VALUES (?)',
        values: [applianceType]
    })

    return NextResponse.json(addAppliance)
}