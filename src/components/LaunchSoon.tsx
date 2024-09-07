import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LaunchSoon({pageName}:any) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mt-6 space-y-4">
          <Button>{pageName}</Button>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email to get updates" className="max-w-lg flex-1" />
            <Button variant="secondary" type="submit">Notify Me</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            We will let you know as soon as we launch the app and share more detail
          </p>
        </div>
      </div>
    </div>
  )
}