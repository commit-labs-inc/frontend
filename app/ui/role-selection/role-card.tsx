"use client";

import Image from "next/image";


export default function RoleCard({ imageSrc, cardName }: { imageSrc: string, cardName: string }) {
    
    return (
        <div className="flex flex-col h-60 w-40 border rounded shadow">
            <Image
                className="h-4/5 w-full object-cover rounded-t"
                src={imageSrc}
                alt={cardName}
                width={300}
                height={400}
            />
            <div className="h-1/5 w-full flex items-center justify-center bg-gray-200 rounded-b">
                <p className="text-center">{cardName}</p>
            </div>
        </div>
    );
}
