import React from "react";
import ribbon1 from "../../assets/Ribbon (1).svg";
import ribbon2 from "../../assets/Ribbon 2.svg"



interface CertificateTemplate4Props {
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

export default function CertificateTemplate4({
  header = "CERTIFICATE",
  courseTitle = "",
  description = "",
  date = "",
  recipientName = "Recipient",
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
}: CertificateTemplate4Props) {
  const previewMode = isPreview || mode === "template-selection";

  const mainBoxStyle: React.CSSProperties = previewMode
    ? {
        width: "100%",
        maxWidth: 1056,
        padding: "16px",
        boxSizing: "border-box",
      }
    : { width: 1056, padding: "24px" };

  return (
    <div style={{ backgroundColor: "transparent" }} className="w-full mx-auto">
      <div
        className="flex justify-center bg-white items-center shadow-md rounded-sm relative"
        style={mainBoxStyle}
      >
        <div>
          <img
            src={ribbon1}
            alt="ribbon1"
            className="absolute z-10"
            style={{ top: 0, left: 0 }}
          />
        
          <img
            src={ribbon2}
            alt="ribbon2"
            className="absolute z-10"
            style={{ bottom: 0, right: 0 }}
          />
        </div>

        <div className="bg-white border-4 border-[#314E854D] p-2">
          <div className="bg-white border-2 border-[#314E854D] px-8 py-10 relative">
            <div className="p-6 w-full flex flex-col items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <h2
                  className="text-3xl tracking-wider font-bold uppercase"
                  style={{ fontFamily: "Rakkas, serif" }}
                >
                  {header || "Certificate of Completion"}
                </h2>
                {/* <p className="uppercase text-center text-[#314E85]">
                  of Achievement
                </p> */}
              </div>
              <p className="uppercase">proudly presented to</p>
              <p className="text-2xl font-semibold w-full border-b-2 border-b-[#314E85] pb-4 text-[#314E85] text-center">
                {recipientName}
              </p>
              <p className="text-center max-w-2xl">
                {description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
              <div className="flex gap-10 w-full items-center justify-center">
                <div className="space-y-2">
                  <p className="border-b-1 border-b-[#314E85] w-40 text-center font-medium tracking-wide">
                    {date || "August 26, 2022"}
                  </p>
                  <p className="text-center text-sm font-medium">DATE</p>
                </div>
                <div className="w-1/6">
                  {/* Optional medal graphic if available in assets */}
                  {medal ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={String(medal)} alt="medal" />
                  ) : null}
                </div>
                <div className="flex gap-8 justify-center items-center mt-5">
                  {/* Signature 1 - Always show if name is provided */}
                  {signatoryName1 && (
                    <div
                      className="flex flex-col items-center text-center"
                      style={{ marginTop: -20 }}
                    >
                      {signatureUrl1 && (
                        <img
                          src={signatureUrl1}
                          alt={signatoryName1}
                          className="w-24 h-16 object-contain"
                          style={{ marginBottom: -12 }}
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
                          className="w-24 h-16 object-contain"
                          style={{ marginBottom: -12 }}
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
                        <div className="text-xs">{signatoryTitle2}</div>
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
                      <div className="text-xs font-bold ">Date</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}