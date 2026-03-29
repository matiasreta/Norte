import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-norte-bg selection:bg-blue-100 selection:text-norte-accent">
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 shadow-sm">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <a href={import.meta.env.BASE_URL} className="flex items-center gap-2 text-norte-primary hover:text-norte-accent transition-colors font-medium">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </a>
          <span className="font-display font-bold text-lg tracking-tighter">Norte Privacy</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-24 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
          Privacy Policy for Norte
        </h1>
        <p className="text-gray-500 mb-12">Effective Date: March 26, 2026</p>

        <div className="prose prose-gray md:prose-lg max-w-none text-gray-600 space-y-8">
          <p>
            NewSalto built the Norte app as a <strong>[Free / Freemium / Paid]</strong> app. 
            This SERVICE is provided by NewSalto and is intended for use as is. This page is 
            used to inform visitors regarding our policies with the collection, use, and 
            disclosure of Personal Information if anyone decided to use our Service.
          </p>

          <div>
            <h2 className="text-2xl font-display font-bold text-norte-primary mb-4 mt-12">1. Information Collection and Use</h2>
            <p>
              We respect your privacy. The core functionality of Norte (your daily timeline, 
              habits, schedules, and progress statistics) is processed and stored locally on 
              your device. We do not require you to create an account, and we do not collect, 
              transmit, or store your personal habit data on external servers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-norte-primary mb-4 mt-12">2. Analytics and Crash Reports</h2>
            <p>
              To improve the performance and stability of the app, we may use third-party services 
              (such as Apple's standard analytics) that collect anonymous crash reports and 
              general usage data. This data does not include any personal information or details 
              about your specific habits and routines.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-norte-primary mb-4 mt-12">3. Security</h2>
            <p>
              We value your trust in using our app. Since your personal habit data remains on 
              your device, its security is tied to your device's security measures (such as 
              your passcode or biometric lock).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-norte-primary mb-4 mt-12">4. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are advised to 
              review this page periodically for any changes. We will notify you of any changes 
              by posting the new Privacy Policy on this page.
            </p>
          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 mt-12">
            <h2 className="text-2xl font-display font-bold text-norte-primary mb-2">5. Contact Us</h2>
            <p className="mb-0">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate 
              to contact us at: <a href="mailto:support@newsalto.com" className="text-norte-accent font-medium hover:underline"><strong>[Tu Correo de Soporte, ej: support@newsalto.com]</strong></a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
