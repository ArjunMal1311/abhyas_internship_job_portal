import prisma from "@/lib/prismadb";

export default async function getAllListings() {
    try {
        const listings = await prisma.listing.findMany({});
        return listings;
    } catch (error: any) {
        throw new Error(error);
    }
}