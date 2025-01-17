import {Separator} from "@/components/ui/separator"
import WorkInProgress from "@/components/ui/work-in-progress";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Subscriptions</h3>
        <p className="text-sm text-muted-foreground">
          Configure how you subscriptions.
        </p>
      </div>
      <Separator/>
      <WorkInProgress/>
    </div>
  )
}