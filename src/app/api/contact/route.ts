import { connectMongoDB } from "@/app/lib/connect";
import { contactModal } from "@/app/modals/subscribe";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const res = await request.json();
    await connectMongoDB();
    await contactModal.create(res);
    return NextResponse.json({
      message: `Thank You for contacting!`,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: `An error occurred while registering the user. ${error} `,
      staus: 500,
    });
  }
};
