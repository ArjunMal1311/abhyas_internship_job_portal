import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb"

export async function POST(req: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser || !currentUser.currentUser.isAdmin) {
        return NextResponse.error();
    }

    const body = await req.json();
    const { title, description, location } = body;


    const listing = await prisma.listing.create({
        data: {
            title, description, location, userId: currentUser.currentUser.id
        }
    })

    return NextResponse.json(listing);
}