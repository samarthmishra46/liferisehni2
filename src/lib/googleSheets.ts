import { google } from "googleapis";

interface LeadData {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  paymentStatus: string;
  paymentId: string;
  orderId: string;
  timestamp: string;
}

// Get Google Sheets client using service account
async function getGoogleSheetsClient() {
  const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  
  if (!serviceAccountKey) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable not set");
  }

  let credentials;
  try {
    credentials = JSON.parse(serviceAccountKey);
  } catch {
    throw new Error("Failed to parse GOOGLE_SERVICE_ACCOUNT_KEY as JSON");
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client as any });
}

// Append lead data to Google Sheet
export async function appendToGoogleSheet(data: LeadData): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    console.warn("GOOGLE_SHEET_ID not configured, skipping Google Sheets append");
    return;
  }

  try {
    const sheets = await getGoogleSheetsClient();

    // Format the timestamp for Indian timezone
    const formattedTimestamp = new Date(data.timestamp).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    });

    // Prepare the row data
    const rowData = [
      formattedTimestamp,
      data.name,
      data.email,
      data.phone,
      data.age,
      data.gender,
      data.height,
      data.weight,
      data.paymentStatus,
      data.paymentId,
      data.orderId,
    ];

    // Append the row to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:K", // Columns A through K
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    console.log("Successfully appended data to Google Sheet");
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    throw error;
  }
}

// Initialize the sheet with headers (call once during setup)
export async function initializeSheetHeaders(): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    throw new Error("GOOGLE_SHEET_ID not configured");
  }

  try {
    const sheets = await getGoogleSheetsClient();

    const headers = [
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Age",
      "Gender",
      "Height (cm)",
      "Weight (kg)",
      "Payment Status",
      "Payment ID",
      "Order ID",
    ];

    // Check if headers already exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!A1:K1",
    });

    if (!response.data.values || response.data.values.length === 0) {
      // Add headers if they don't exist
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Sheet1!A1:K1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });
      console.log("Sheet headers initialized");
    }
  } catch (error) {
    console.error("Error initializing sheet headers:", error);
    throw error;
  }
}
