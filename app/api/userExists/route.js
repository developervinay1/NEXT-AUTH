import { connectMongoEmail } from "@/components/lib/mongodbEmail";
import EmailUser from "@/models/EmailUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoEmail();
    const { email } = req.json();
    const user = await EmailUser.findOne({ email }).select("_id");
    console.log("User : " + user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
