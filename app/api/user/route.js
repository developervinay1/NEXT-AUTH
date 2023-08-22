import { connectMongo } from "@/components/lib/mongodb"
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    const {name, email} = await req.json()
    await connectMongo();
    await User.create({name, email});
    return NextResponse.json({message: "User Created"}, {status: 201})
}