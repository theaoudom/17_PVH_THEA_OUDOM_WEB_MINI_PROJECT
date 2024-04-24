'use server'

import { createNewWorkspace } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

export async function handleWorkspace (workspace){
    const workspaceData = { 
      workspaceName: workspace.get('workspaceName')
    }
    await createNewWorkspace(workspaceData)
    revalidateTag('workspace');
  }