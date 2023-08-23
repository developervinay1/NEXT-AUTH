import { connectMongoEmail } from "@/components/lib/mongodbEmail";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import EmailUser from "@/models/EmailUser";

export async function POST (req) {
    try {
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoEmail();
        await EmailUser.create({ name, email, password: hashedPassword })
        return NextResponse.json({message: "User Registered"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An Error Occured"}, {status: 500})
    }
}