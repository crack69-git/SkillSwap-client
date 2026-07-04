import Link from "next/link";
import { BriefcaseBusiness, ArrowLeft } from "lucide-react";

const NeedtobeFreelancer = () => {
  return (
    <div className="flex min-h-screen items-center justify-center  px-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <BriefcaseBusiness className="h-10 w-10 text-amber-600" />
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Freelancer Account Required
        </h1>

        {/* Description */}
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          This page is available only to registered freelancers.
          <br />
          Upgrade your account or sign up as a freelancer to browse and apply
          for available tasks.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-6 py-3 font-medium text-slate-700 dark:text-slate-300 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NeedtobeFreelancer;
