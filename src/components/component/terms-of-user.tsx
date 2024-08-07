import { Button } from "@/components/ui/button"

export function TermsOfUser() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms of Use</h1>
          <p className="mt-4 text-muted-foreground">By using our platform, you agree to the following terms:</p>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="text-lg font-medium">Intellectual Property</h3>
            <p>
              All content and materials on our platform are the property of our company and are protected by copyright
              and other intellectual property laws.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">User Conduct</h3>
            <p>
              You agree to use our platform in a responsible and lawful manner, and not to engage in any activities that
              may harm our company or other users.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Privacy</h3>
            <p>
              We take the privacy of our users seriously and will only use your personal information in accordance with
              our Privacy Policy.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Termination</h3>
            <p>
              We reserve the right to terminate your access to our platform at any time, for any reason, without notice.
            </p>
          </div>
        </div>
        <div className="text-center">
          <Button
            type="button"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Accept Terms
          </Button>
        </div>
      </div>
    </div>
  )
}
