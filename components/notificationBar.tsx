import { Button } from "@/components/ui/button";

export function NotificationBar() {
  return (
    <div className="bg-blue-600 text-white text-center py-2">
      Join our after school program that introduces a new and exciting field of
      engineering every week!
      <Button className="ml-4 bg-white text-blue-600 hover:bg-blue-200">
        Sign up now
      </Button>
    </div>
  );
}
