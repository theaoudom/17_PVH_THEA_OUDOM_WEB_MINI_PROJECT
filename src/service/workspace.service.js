import { baseUrl } from "@/utils/constants";
import { headerToken } from "@/app/api/headerToken";

export const getAllWorkspace = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/workspaces`, {
    next : {
      tags: ['workspace']
    },
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const createNewWorkspace = async (workspace) => { 
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/workspaces`,{
    method: "POST",
    body: JSON.stringify(workspace),
    headers: header,
    
  })
  const data = await res.json(); 
  return data; 
}

export const deleteWorkspaceById = async (id) => { 
  const header = await headerToken(); 
  const res = await fetch(`${baseUrl}/workspaces/${id}`,{
    method: 'DELETE',
  })
  const data = await res.json(); 
  return data; 
}