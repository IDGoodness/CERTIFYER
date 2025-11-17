import React from "react";
import ribbonSrc from "../../assets/Ribbon 2.svg"



interface CertificateTemplate3Props {
  header?: string;
  courseTitle?: string;
  description?: string;
  date?: string;
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

export default function CertificateTemplate3({
  header = "CERTIFICATE",
  courseTitle = "Sample Course",
  description = "",
  date = "",
  recipientName = "Name Surname",
  isPreview = false,
  organizationName,
  organizationLogo,
  signatoryName1,
  signatoryTitle1,
  signatureUrl1,
  signatoryName2,
  signatoryTitle2,
  signatureUrl2,
  mode = "student",
}: CertificateTemplate3Props) {
  const previewMode = isPreview || mode === "template-selection";

  // Main certificate box style: responsive when in previewMode so it fits inside the preview wrapper.
  const mainBoxStyle: React.CSSProperties = previewMode
    ? {
        width: "100%",
        maxWidth: 1056,
        height: "auto",
        padding: "32px",
        boxSizing: "border-box",
      }
    : { width: 1056, height: 816, padding: "64px 64px" };

  return (
    <div style={{ backgroundColor: "transparent" }} className="w-full mx-auto">
      <div
        className="flex justify-center bg-[#FEFEFD] items-center shadow-md rounded-sm relative overflow-hidden text-[#4D4D4D]"
        style={mainBoxStyle}
      >
        <div className="z-0 absolute inset-0">
          <div
            style={{
              background: "#000",
              width: "100%",
              height: previewMode ? 80 : 80,
              transform: "skewY(5deg)",
              position: "absolute",
              left: 0,
              top: previewMode ? "-30px" : "-30px",
              zIndex: 5,
            }}
          />

          <div
            style={{
              background: "#FBB33A",
              width: "100%",
              height: previewMode ? 150 : 150,
              transform: "rotate(30deg)",
              borderRadius: 6,
              position: "absolute",
              right: previewMode ? "-25%" : "-25%",
              top: previewMode ? "-130px" : "-130px",
              zIndex: 10,
            }}
          />

          <div
            style={{
              background: "#e5e7eb",
              width: "50%",
              height: previewMode ? 44 : 44,
              transform: "rotate(-4deg)",
              position: "absolute",
              left: previewMode ? "-2%" : "-2%",
              top: previewMode ? "3%" : "3%",
              zIndex: 0,
            }}
          />

          <div
            style={{
              background: "rgba(0,0,0,0.9)",
              width: "100%",
              height: previewMode ? 60 : 60,
              transform: "skewY(-2deg)",
              position: "absolute",
              left: 0,
              bottom: previewMode ? -12 : -12,
              zIndex: 5,
            }}
          />

          <div
            style={{
              background: "#e5e7eb",
              width: "100%",
              height: previewMode ? 28 : 28,
              transform: "skewY(5deg)",
              position: "absolute",
              left: 0,
              bottom: previewMode ? "6%" : "6%",
              zIndex: 0,
            }}
          />

          <div
            style={{
              background: "#FBB33A",
              width: "50%",
              height: previewMode ? 28 : 28,
              transform: "skewY(-10deg) skewX(-10deg)",
              position: "absolute",
              right: previewMode ? "-4%" : "-4%",
              bottom: previewMode ? "8%" : "8%",
              zIndex: 0,
            }}
          />

          <div
            style={{
              background: "#000",
              width: "50%",
              height: previewMode ? 56 : 56,
              transform: "skewY(-2deg) skewX(-60deg)",
              position: "absolute",
              right: previewMode ? "-6%" : "-6%",
              bottom: previewMode ? "-4%" : "-4%",
              zIndex: 5,
            }}
          />

          {/* <img
            src={ribbonSrc}
            alt="ribbon"
            className="absolute"
            style={{
              top: previewMode ? "4%" : 40,
              right: previewMode ? "6%" : 48,
              zIndex: 10,
            }}
          /> */}

          <div
            style={{
              background: "#fbb33a",
              position: "absolute",
              right: previewMode ? "8%" : "8%",
              top: previewMode ? "6%" : "6%",
              zIndex: 10,
              border: "1px solid #c77b00",
              width: previewMode ? 36 : 36,
              height: previewMode ? 36 : 36,
              borderRadius: "9999px",
            }}
          />
        </div>

        <div className="p-6 mt-6 w-full flex flex-col items-center gap-6 relative z-20">
          <div>
            {/* <h2 className="text-4xl tracking-wider font-bold">CERTIFICATE</h2> */}
            <div className="flex items-center gap-4 text-xl uppercase">
              {/* <span className="w-10 border" /> */}
              <p className="text-3xl tracking-wider uppercase">
                {header || "Certificate of Appreciation"}{" "}
              </p>
              {/* <span className="w-10 border" /> */}
            </div>
          </div>

          <p className="uppercase">This certificate is proudly presented to</p>

          <p
            className="text-6xl font-bold border-b-2 pb-2 text-[#FFB145] text-center"
            style={{ fontFamily: "Tangerine, serif" }}
          >
            {recipientName}
          </p>

          <p className="text-center max-w-2xl">
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </p>

          <div className="flex gap-8 justify-center items-center mt-5">
            {/* Signature 1 - Always show if name is provided */}
            {signatoryName1 && (
              <div className="flex flex-col items-center text-center" style={{marginTop: -20,}} >
                {signatureUrl1 && (
                  <img
                    src={signatureUrl1}
                    alt={signatoryName1}
                    className="w-24 h-16 object-contain" style={{marginBottom: -12}}
                  />
                )}
                {!signatureUrl1 && (
                  <div className="w-32 border-b-2 border-gray-400 mb-2" />
                )}
                <div
                  className="text-sm font-medium"
                  style={{ color: "#4D4D4D" }}
                >
                  {signatoryName1}
                </div>
                {signatoryTitle1 && (
                  <div className="text-xs font-bold">
                    {signatoryTitle1}
                  </div>
                )}
              </div>
            )}

            {/* Signature 2 - Always show if name is provided */}
            {signatoryName2 && (
              <div className="flex flex-col items-center text-center">
                {signatureUrl2 && (
                  <img
                    src={signatureUrl2}
                    alt={signatoryName2}
                    className="w-24 h-16 object-contain" style={{marginBottom: -12}}
                  />
                )}
                {!signatureUrl2 && (
                  <div className="w-32 border-b-2 border-gray-400 mb-2" />
                )}
                <div
                  className="text-sm font-medium"
                  style={{ color: "#4D4D4D" }}
                >
                  {signatoryName2}
                </div>
                {signatoryTitle2 && (
                  <div className="text-xs">
                    {signatoryTitle2}
                  </div>
                )}
              </div>
            )}

            {/* Date display */}
            {date && (
              <div className="flex flex-col items-center text-center">
                <div className="w-32 mt-5 mb-2" />
                <div
                  className="text-sm font-medium"
                  style={{ color: "#4D4D4D" }}
                >
                  {date}
                </div>
                <div className="text-xs font-bold ">
                  Date
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}