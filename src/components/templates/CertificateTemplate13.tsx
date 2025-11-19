import React, { useEffect } from "react";

interface CertificateTemplate13Props {
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

export default function CertificateTemplate13({
  header,
  courseTitle,
  description = "For demonstrating exceptional skills and dedication in completing the program with outstanding performance and commitment to excellence.",
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
}: CertificateTemplate13Props) {
  const transformClass =
    mode === "student" ? "transform scale-[0.3]" : "transform scale-100";
  const containerClass = isPreview
    ? "w-full mx-auto origin-center overflow-visible flex justify-center"
    : "min-w-[1056px] flex justify-center items-center";

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap";
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
        className="shadow-lg relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50"
        style={{ width: "640px", height: "500px" }}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-indigo-600"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-indigo-600"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-8 border-l-8 border-indigo-600"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-indigo-600"></div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-purple-200 opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-indigo-200 opacity-30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
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
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <p className="text-sm text-indigo-700 tracking-widest uppercase mb-2">
              Certificate of
            </p>
            <h1 className="text-5xl font-bold text-indigo-900">
              {header || "Achievement"}
            </h1>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mb-6"></div>

          {/* Presented to */}
          <p
            className="text-sm text-gray-600 mb-2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            This is proudly presented to
          </p>

          {/* Recipient Name */}
          <h2
            className="text-4xl font-bold text-indigo-800 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {recipientName}
          </h2>

          {/* Description */}
          <p
            className="text-xs text-gray-700 max-w-md mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {description}
          </p>

          {/* Signatures Section */}
          <div className="flex justify-center items-end gap-12 w-full mt-auto">
            {hasSignature1 && (
              <div className="flex flex-col items-center">
                {signatureUrl1 && (
                  <img
                    src={signatureUrl1}
                    alt="Signature"
                    className="h-12 mb-2"
                  />
                )}
                {signatoryName1 && (
                  <p className="text-xs font-semibold text-gray-800 border-t-2 border-indigo-600 pt-1">
                    {signatoryName1}
                  </p>
                )}
                {signatoryTitle1 && (
                  <p className="text-xs text-gray-600">{signatoryTitle1}</p>
                )}
              </div>
            )}

            {/* Date in center if no second signature, or on the right if two signatures */}
            {!hasSignature2 && (
              <div className="flex flex-col items-center">
                <p className="text-xs text-gray-600 mb-1">Date</p>
                <p className="text-xs font-semibold text-gray-800 border-t-2 border-indigo-600 pt-1">
                  {formattedDate}
                </p>
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
                {signatoryName2 && (
                  <p className="text-xs font-semibold text-gray-800 border-t-2 border-indigo-600 pt-1">
                    {signatoryName2}
                  </p>
                )}
                {signatoryTitle2 && (
                  <p className="text-xs text-gray-600">{signatoryTitle2}</p>
                )}
              </div>
            )}
          </div>

          {/* Date at bottom if two signatures */}
          {hasSignature2 && (
            <div className="flex justify-center mt-4">
              <p
                className="text-xs text-gray-600"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Awarded on {formattedDate}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}