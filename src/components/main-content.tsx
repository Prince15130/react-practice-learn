import { FolderPlus, Plus } from "lucide-react";

export const MainContent = () => {
  return (
    <div className="flex-1 transition-all bg-[F3F5F7] duration-300 px-3 h-full overflow-hidden">
      <div className="bg-white border-2 rounded-md border-[rgba(0,0,0,0.1)] h-full overflow-hidden p-6 shadow-sm flex flex-col items-center justify-center">
        <FolderPlus size={120} className="text-[#3B40E8]/90" />
        <p className="mt-4 text-sm text-gray-500">
          No files has been added yet
        </p>
        <button className="mt-4 px-4 py-2 bg-[#3B40E8] text-white rounded-md flex items-center gap-2 justify-center hover:bg-[#3B40E8]/90 transition-all duration-200 cursor-pointer">
          <Plus size={16} />
          <span>Add File(s )</span>
        </button>
      </div>
    </div>
  );
};
