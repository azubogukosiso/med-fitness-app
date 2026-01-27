import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from "@react-pdf/renderer";
import QRCode from "qrcode";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: "15px",
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
  },
  mainHeading: {
    fontSize: 25,
  },
  subHeading: {
    fontStyle: "italic",
  },
  logoImg: {
    objectFit: "cover",
  },
  details: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timesNewRomanFont: {
    fontFamily: "Times-Roman",
  },
  imgContainer: {
    width: 100,
    height: 110,
  },
  signImg: {
    objectFit: "cover",
    zIndex: 10,
    width: 200,
    height: 90,
  },
  thirdDetail: {
    fontWeight: "bold",
  },
  ref: {
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 20,
    fontFamily: "Times-Roman",
  },
  certHeading: {
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  certBody: {
    lineHeight: 1.5,
    fontStyle: "italic",
    fontFamily: "Times-Roman",
  },
  footer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
  },
  firstFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stampImg: {
    width: 200,
    height: 85,
    transform: "rotate(5deg)",
    position: "absolute",
    left: -15,
    top: 20,
  },
  signatureLabel: {
    fontFamily: "Times-Roman",
    fontStyle: "italic",
    marginBottom: 15,
  },
  signature: {
    marginTop: 10,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  directorTitle: {
    fontStyle: "italic",
    fontSize: 10,
    fontFamily: "Times-Roman",
  },
  verifyContainer: {
    marginTop: 30,
    alignItems: "flex-end",
    fontFamily: "Times-Roman",
  },
  verificationLink: {
    textAlign: "right",
  },
  qrImage: {
    width: 100,
    height: 100,
  },
});

type MyDocumentPropType = {
  name: string;
  certificateId: string;
  verificationLink: string;
  qrCodeDataUrl: string;
};

const getFormattedDate = () => {
  const date = new Date();
  const day = date.getDate();
  const getDaySuffix = (d: number) => {
    if (d >= 11 && d <= 13) {
      return "th";
    }
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayWithSuffix = `${day}${getDaySuffix(day)}`;
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${dayWithSuffix}, ${year}`;
};

const MyDocument = ({
  name,
  certificateId,
  verificationLink,
  qrCodeDataUrl,
}: MyDocumentPropType) => {
  return (
    <Document>
      <Page style={styles.page} orientation="landscape" size="A4">
        <View style={styles.heading}>
          <Text style={styles.mainHeading}>
            ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </Text>
          <Text style={styles.subHeading}>
            Office of the Director, Medical Services
          </Text>
        </View>

        <View style={styles.details}>
          <View>
            <Text>
              Tel: <Text style={styles.timesNewRomanFont}>080371024656</Text>
            </Text>
            <Text>
              Website:{" "}
              <Text style={styles.timesNewRomanFont}>www.esutportal.net</Text>
            </Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.logoImg}
              src="./src/public/images/ESUT_logo.jpg"
            ></Image>
          </View>
          <View style={styles.thirdDetail}>
            <Text>EBEANO CITY</Text>
            <Text>P.M.B 01660</Text>
            <Text>ENUGU, NIGERIA</Text>
            <Text>DATE: {getFormattedDate().toUpperCase()}</Text>
          </View>
        </View>

        <View style={styles.ref}>
          <Text>Our Ref: ESUT/MC/025</Text>
        </View>

        <View>
          <Text style={styles.certHeading}>MEDICAL CERTIFICATE OF FITNESS</Text>
          <Text style={styles.certBody}>
            A Medical Examination has been conducted on Chief/Prof./Mr./Mrs./Ms.
            <Text> {name} </Text>and I hereby certify him/her to be in good
            mental and physical condition, and is free from any physical defect
            which may interfere with his/her studies/duties/activities.
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.firstFooter}>
            <Text style={styles.signatureLabel}>Signature with Seal:</Text>
            <View style={styles.signature}>
              <View>
                <Image
                  style={styles.signImg}
                  src="./src/public/images/ESUT_Doctor_Sign.png"
                ></Image>
              </View>
              <Text>DR. NJIDEKA KENNETH-NJOKU</Text>
              <Text style={styles.directorTitle}>
                DIRECTOR, MEDICAL SERVICES
              </Text>
            </View>
          </View>

          <Image
            style={styles.stampImg}
            src="./src/public/images/ESUT_Med_Center_Stamp.png"
          ></Image>

          <View style={styles.verifyContainer}>
            <Image src={qrCodeDataUrl} style={styles.qrImage} />
            <Link style={styles.verificationLink} src={verificationLink}>
              You can scan the QR code or{"\n"}click this link to verify the
              certificate's authenticity
            </Link>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
