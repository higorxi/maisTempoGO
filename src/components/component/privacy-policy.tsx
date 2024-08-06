export function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-background">
      <div className="max-w-3xl w-full px-4 md:px-6 py-8 md:py-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground">
            At Acme Inc., we are committed to protecting the privacy and security of your personal information. This
            privacy policy outlines how we collect, use, and safeguard your data.
          </p>
        </div>
        <div className="mt-8 prose prose-gray max-w-none dark:prose-invert">
          <h2>Data Collection</h2>
          <p>
            We collect personal information that you provide to us, such as your name, email address, and any other
            information you choose to share. We also collect non-personal information, such as your IP address, browser
            type, and device information, to improve our services and understand how our website is used.
          </p>
          <h2>Data Usage</h2>
          <p>
            We use your personal information to provide and improve our services, communicate with you, and comply with
            legal obligations. We may also use your information for marketing purposes, but you can opt-out of these
            communications at any time.
          </p>
          <h2>Data Sharing</h2>
          <p>
            We may share your personal information with third-party service providers who assist us in operating our
            website and delivering our services. We do not sell or rent your personal information to any third parties.
          </p>
          <h2>User Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can also request that we
            limit the processing of your data or object to certain data processing activities. If you have any concerns
            or questions about our privacy practices, please contact us at privacy@acme.com.
          </p>
          <h2>Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, or
            misuse. We use industry-standard encryption and security protocols to safeguard your data.
          </p>
          <h2>Changes to this Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            policy on our website.
          </p>
        </div>
      </div>
    </div>
  )
}
