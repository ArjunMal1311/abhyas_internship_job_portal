import prisma from "@/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getAllResponses() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || !currentUser.currentUser.isAdmin) {
            return null;
        }

        const applications = await prisma.application.findMany({});

        const applicationDetails = await Promise.all(applications.map(async (application) => {
            const listing = await prisma.listing.findUnique({
                where: {
                    id: application.listingId,
                },
                select: {
                    title: true,
                },
            });

            return {
                name: application.name,
                email: application.email,
                listingTitle: listing?.title || "Listing not found", 
            };
        }));

        

        return applicationDetails;
    } catch (error: any) {
        throw new Error(error);
    }
}
