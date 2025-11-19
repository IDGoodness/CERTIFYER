import React, { useEffect } from "react";

interface CertificateTemplate14Props {
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

export default function CertificateTemplate14({
  header,
  courseTitle,
  description = "For outstanding achievement and remarkable contribution to the program, demonstrating excellence and commitment throughout.",
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
}: CertificateTemplate14Props) {
  const transformClass =
    mode === "student" ? "transform scale-[0.3]" : "transform scale-100";
  const containerClass = isPreview
    ? "w-full mx-auto origin-center overflow-visible flex justify-center"
    : "min-w-[1056px] flex justify-center items-center";

  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href =
      "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href =
      "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap";
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
        {/* Elegant border frame */}
        <div className="absolute inset-0 border-8 border-double border-emerald-700 m-4"></div>
        <div className="absolute inset-0 border-2 border-emerald-600 m-6"></div>

        {/* Decorative corner flourishes */}
        <div className="absolute top-8 left-8">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M0 20 Q0 0 20 0 M20 0 Q0 0 0 20"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-8 right-8 rotate-90">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M0 20 Q0 0 20 0 M20 0 Q0 0 0 20"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-8 left-8 -rotate-90">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M0 20 Q0 0 20 0 M20 0 Q0 0 0 20"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute bottom-8 right-8 rotate-180">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <path
              d="M0 20 Q0 0 20 0 M20 0 Q0 0 0 20"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Watermark pattern */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="300" height="300" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#059669"
              strokeWidth="2"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#059669"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="#059669"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
          {/* Organization Logo */}
          {organizationLogo && (
            <img
              src={organizationLogo}
              alt="Organization Logo"
              className="w-20 h-20 object-contain mb-4"
            />
          )}

          {/* Header */}
          <div className="mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
            <p className="text-xs text-emerald-700 tracking-widest uppercase mb-2">
              Certificate of
            </p>
            <h1 className="text-5xl font-bold text-emerald-900">
              {header || "Excellence"}
            </h1>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-emerald-700"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-700"></div>
            <div className="w-8 h-px bg-emerald-700"></div>
          </div>

          {/* Presented to */}
          <p
            className="text-xs text-gray-600 mb-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            This certificate is proudly awarded to
          </p>

          {/* Recipient Name */}
          <h2
            className="text-4xl font-bold text-emerald-800 mb-6 border-b-2 border-emerald-700 pb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {recipientName}
          </h2>

          {/* Description */}
          <p
            className="text-xs text-gray-700 max-w-lg mb-8"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {description}
          </p>

          {/* Signatures Section */}
          <div className="flex justify-center items-end gap-16 w-full mt-auto">
            {hasSignature1 && (
              <div className="flex flex-col items-center">
                {signatureUrl1 && (
                  <img
                    src={signatureUrl1}
                    alt="Signature"
                    className="h-12 mb-2"
                  />
                )}
                <div className="w-32 h-px bg-emerald-700 mb-1"></div>
                {signatoryName1 && (
                  <p
                    className="text-xs font-semibold text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {signatoryName1}
                  </p>
                )}
                {signatoryTitle1 && (
                  <p
                    className="text-xs text-gray-600"
                    style={{ fontFamily: "'Lato', sans-serif" }}
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
                <div className="w-32 h-px bg-emerald-700 mb-1"></div>
                {signatoryName2 && (
                  <p
                    className="text-xs font-semibold text-gray-800"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {signatoryName2}
                  </p>
                )}
                {signatoryTitle2 && (
                  <p
                    className="text-xs text-gray-600"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {signatoryTitle2}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Date */}
          <div className="flex justify-center mt-6">
            <p
              className="text-xs text-gray-600"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Issued on {formattedDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}