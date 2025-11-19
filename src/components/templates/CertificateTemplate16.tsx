import React, { useEffect } from "react";

interface CertificateTemplate16Props {
  header: string;
  courseTitle: string;
  description?: string;
  date: string;
  recipientName?: string;
  isPreview?: boolean;
  organizationName?: string;
  organizationLogo?: string;
  signatoryName1?: string;
  signatoryTitle1?: string;
  signatureUrl1?: string;
  signatoryName2?: string;
  signatoryTitle2?: string;
  signatureUrl2?: string;
  mode?: "student" | "template-selection";
}

export default function CertificateTemplate16({
  header,
  courseTitle,
  description = "For exceptional dedication, outstanding performance, and significant contributions to the successful completion of this program.",
  date,
  recipientName = "Name Surname",
  isPreview = false,
  organizationName = "Your Organization",
  organizationLogo,
  signatoryName1,
  signatoryTitle1,
  signatureUrl1,
  signatoryName2,
  signatoryTitle2,
  signatureUrl2,
  mode = "student",
}: CertificateTemplate16Props) {
  const transformClass =
    mode === "student" ? "transform scale-[0.3]" : "transform scale-100";
  const containerClass = isPreview
    ? "w-full mx-auto origin-center overflow-visible flex justify-center"
    : "min-w-[1056px] flex justify-center items-center";

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href =
      "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap";
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Determine signature count
  const hasSignature1 = signatoryName1 || signatoryTitle1 || signatureUrl1;
  const hasSignature2 = signatoryName2 || signatoryTitle2 || signatureUrl2;

  return (
    <div className={`${containerClass} ${transformClass} bg-transparent`}>
      <div
        className="shadow-lg relative overflow-hidden"
        style={{
          width: "640px",
          height: "500px",
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)",
        }}
      >
        {/* Decorative wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 opacity-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path
              d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* White certificate paper overlay */}
        <div className="absolute inset-0 m-8 bg-white shadow-2xl">
          {/* Blue accent top border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400"></div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12">
            <div className="w-full h-1 bg-blue-600"></div>
            <div className="w-1 h-full bg-blue-600 absolute top-0 left-0"></div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12">
            <div className="w-full h-1 bg-blue-600"></div>
            <div className="w-1 h-full bg-blue-600 absolute top-0 right-0"></div>
          </div>
          <div className="absolute bottom-4 left-4 w-12 h-12">
            <div className="w-full h-1 bg-blue-600 absolute bottom-0"></div>
            <div className="w-1 h-full bg-blue-600 absolute bottom-0 left-0"></div>
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12">
            <div className="w-full h-1 bg-blue-600 absolute bottom-0"></div>
            <div className="w-1 h-full bg-blue-600 absolute bottom-0 right-0"></div>
          </div>

          {/* Decorative badge */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg border-4 border-white">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center pt-8">
            {/* Organization Logo */}
            {organizationLogo && (
              <img
                src={organizationLogo}
                alt="Organization Logo"
                className="w-16 h-16 object-contain mb-4"
              />
            )}

            {/* Header */}
            <div
              className="mb-6"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              <p className="text-xs text-blue-600 tracking-widest uppercase mb-2 font-semibold">
                Certificate of
              </p>
              <h1 className="text-5xl font-black text-gray-900">
                {header || "Distinction"}
              </h1>
            </div>

            {/* Decorative line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue-600"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="w-12 h-px bg-blue-600"></div>
            </div>

            {/* Presented to */}
            <p
              className="text-xs text-gray-600 mb-2"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              This is hereby awarded to
            </p>

            {/* Recipient Name */}
            <h2
              className="text-4xl font-bold text-blue-700 mb-6"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              {recipientName}
            </h2>

            {/* Description */}
            <p
              className="text-xs text-gray-700 max-w-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              {description}
            </p>

            {/* Signatures Section */}
            <div className="flex justify-center items-end gap-16 w-full mt-auto mb-4">
              {hasSignature1 && (
                <div className="flex flex-col items-center">
                  {signatureUrl1 && (
                    <img
                      src={signatureUrl1}
                      alt="Signature"
                      className="h-12 mb-2"
                    />
                  )}
                  <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-1"></div>
                  {signatoryName1 && (
                    <p
                      className="text-xs font-semibold text-gray-800"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      {signatoryName1}
                    </p>
                  )}
                  {signatoryTitle1 && (
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      {signatoryTitle1}
                    </p>
                  )}
                </div>
              )}

              {hasSignature2 && (
                <div className="flex flex-col items-center">
                  {signatureUrl2 && (
                    <img
                      src={signatureUrl2}
                      alt="Signature"
                      className="h-12 mb-2"
                    />
                  )}
                  <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent mb-1"></div>
                  {signatoryName2 && (
                    <p
                      className="text-xs font-semibold text-gray-800"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      {signatoryName2}
                    </p>
                  )}
                  {signatoryTitle2 && (
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      {signatoryTitle2}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Date */}
            <div className="flex justify-center items-center gap-2 mt-2">
              <div className="w-3 h-3 border-2 border-blue-600 rounded-full"></div>
              <p
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              >
                Awarded on {formattedDate}
              </p>
              <div className="w-3 h-3 border-2 border-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}