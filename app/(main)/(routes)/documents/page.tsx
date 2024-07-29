"use client"; 

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating a new page...",
            success: "New page created",
            error: "Failed to create a new page"
        });
    };

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                height="400"
                width="400"
                alt="no content"
            />
            <h2 className="text-lg font-medium">
                {user?.firstName}&apos;s DayBook is empty
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>
        </div>
    );
}
 
export default DocumentsPage;