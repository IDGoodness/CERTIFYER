import React, { useEffect } from "react";

interface CertificateTemplate15Props {
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

export default function CertificateTemplate15({
  header,
  courseTitle,
  description = "In recognition of exceptional performance and dedication to excellence in the pursuit of knowledge and skill development.",
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
}: CertificateTemplate15Props) {
  const transformClass =
    mode === "student" ? "transform scale-[0.3]" : "transform scale-100";
  const containerClass = isPreview
    ? "w-full mx-auto origin-center overflow-visible flex justify-center"
    : "min-w-[1056px] flex justify-center items-center";

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href =
      "https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700;900&display=swap";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap";
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
        className="shadow-lg relative overflow-hidden bg-white"
        style={{ width: "640px", height: "500px" }}
      >
        {/* Geometric header with diagonal split */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-orange-500 to-amber-600"></div>
        <div
          className="absolute top-32 left-0 right-0"
          style={{
            height: "0",
            borderLeft: "640px solid transparent",
            borderTop: "30px solid #f97316",
          }}
        ></div>

        {/* Decorative geometric patterns */}
        <div className="absolute top-4 right-4 w-16 h-16 border-4 border-white opacity-30 rotate-45"></div>
        <div className="absolute top-12 right-12 w-12 h-12 border-4 border-white opacity-20 rotate-45"></div>

        {/* Side accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-600 to-amber-500"></div>

        <div className="relative z-10 flex flex-col h-full px-16 pt-12">
          {/* Organization name in header */}
          <div className="flex items-center justify-between mb-16">
            {organizationLogo && (
              <img
                src={organizationLogo}
                alt="Organization Logo"
                className="w-16 h-16 object-contain"
              />
            )}
            <p
              className="text-white font-bold tracking-wider"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {organizationName}
            </p>
          </div>

          {/* Main content */}
          <div className="text-left">
            {/* Header */}
            <div
              className="mb-8"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              <p className="text-xs text-orange-600 tracking-widest uppercase mb-2 font-semibold">
                Certificate of
              </p>
              <h1 className="text-5xl font-black text-gray-900">
                {header || "Recognition"}
              </h1>
            </div>

            {/* Presented to */}
            <p
              className="text-xs text-gray-600 mb-2"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              This certificate is proudly presented to
            </p>

            {/* Recipient Name */}
            <h2
              className="text-3xl font-bold text-orange-600 mb-6"
              style={{ fontFamily: "'Raleway', sans-serif" }}
            >
              {recipientName}
            </h2>

            {/* Orange accent bar */}
            <div className="w-24 h-1 bg-orange-500 mb-6"></div>

            {/* Description */}
            <p
              className="text-xs text-gray-700 max-w-md mb-8 leading-relaxed"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {description}
            </p>

            {/* Signatures Section */}
            <div className="flex justify-between items-end mt-12">
              <div className="flex gap-12">
                {hasSignature1 && (
                  <div className="flex flex-col">
                    {signatureUrl1 && (
                      <img
                        src={signatureUrl1}
                        alt="Signature"
                        className="h-12 mb-2"
                      />
                    )}
                    {signatoryName1 && (
                      <p
                        className="text-xs font-semibold text-gray-800 border-t-2 border-orange-500 pt-1"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {signatoryName1}
                      </p>
                    )}
                    {signatoryTitle1 && (
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {signatoryTitle1}
                      </p>
                    )}
                  </div>
                )}

                {hasSignature2 && (
                  <div className="flex flex-col">
                    {signatureUrl2 && (
                      <img
                        src={signatureUrl2}
                        alt="Signature"
                        className="h-12 mb-2"
                      />
                    )}
                    {signatoryName2 && (
                      <p
                        className="text-xs font-semibold text-gray-800 border-t-2 border-orange-500 pt-1"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {signatoryName2}
                      </p>
                    )}
                    {signatoryTitle2 && (
                      <p
                        className="text-xs text-gray-600"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {signatoryTitle2}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="flex flex-col items-end">
                <p
                  className="text-xs text-gray-600 mb-1"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Date Issued
                </p>
                <p
                  className="text-xs font-semibold text-gray-800"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  {formattedDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-orange-500 to-amber-600"></div>
      </div>
    </div>
  );
}