import { deleteWorkspaceById } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

export async function deleteWorkspaceAction (id) {
    await deleteWorkspaceById(id);
    revalidateTag('workspace')
}

