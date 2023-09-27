import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
    const { jobId: listingId, formData: { name, email } } = await req.json();

    const existingApplication = await prisma.application.findFirst({
        where: {
            listingId,
            name,
            email,
        },
    });

    if (existingApplication) {
        return NextResponse.json({ success: false });
    }

    await prisma.application.create({
        data: {
            listingId,
            name,
            email,
        },
    });

    return NextResponse.json({ success: true });
}