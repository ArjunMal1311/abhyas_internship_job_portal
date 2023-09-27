import prisma from "@/lib/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export default async function getAllResponses() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || !currentUser.currentUser.isAdmin) {
            return null;
        }

        const applications = await prisma.application.findMany({});
        console.log(applications);

        return applications;
    } catch (error: any) {
        throw new Error(error);
    }
}
