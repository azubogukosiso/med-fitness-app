import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
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
  details: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  phoneNum: {
    fontWeight: "bold",
  },
  website: {
    fontFamily: "Times-Roman",
  },
  imgContainer: {
    width: 100,
    height: 100,
  },
  img: {
    objectFit: "cover",
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
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  signatureLabel: {
    fontFamily: "Times-Roman",
    fontStyle: "italic",
  },
  signature: {
    marginTop: 40,
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
});

type MyDocumentPropType = {
  name: string;
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

const MyDocument = ({ name }: MyDocumentPropType) => (
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
          <Text style={styles.phoneNum}>080371024656</Text>
          <Text>
            Website: <Text style={styles.website}>www.esutportal.net</Text>
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
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
        <Text>Our Ref: __________________</Text>
      </View>

      <View>
        <Text style={styles.certHeading}>MEDICAL CERTIFICATE OF FITNESS</Text>
        <Text style={styles.certBody}>
          A Medical Examination has been conducted on Chief/Prof./Mr./Mrs./Ms.
          <Text> {name} </Text> and I hereby certify him/her to be in good
          mental and physical condition, and is free from any physical defect
          which may interfere with his/her studies/duties/activities.
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.firstFooter}>
          <Text style={styles.signatureLabel}>Signature with Seal:</Text>
          <View style={styles.signature}>
            <Text>
              ...............................................................
            </Text>
            <Text>DR. NJIDEKA KENNETH NJOKU</Text>
            <Text style={styles.directorTitle}>DIRECTOR, MEDICAL SERVICES</Text>
          </View>
        </View>

        <View></View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
