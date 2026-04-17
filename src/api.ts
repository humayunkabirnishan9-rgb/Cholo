/**
 * CHOLO API Service Layer
 * This module will connect to the Python backend (Django/Flask/FastAPI).
 * All endpoints below are placeholder implementations for Phase 1 MVP.
 * Replace BASE_URL with your actual backend URL when deploying.
 */

const BASE_URL = 'https://api.cholo.com.bd';

export interface BookingRequest {
  passenger_name: string;
  phone: string;
  email?: string;
  origin: string;
  destination: string;
  desired_date: string;
  time_slot: string;
  operator_preference: string;
  seat_count: number;
}

export interface SearchQuery {
  origin: string;
  destination: string;
  date: string;
}

export interface WaitlistEntry {
  name: string;
  phone: string;
  email?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

/**
 * POST /api/bookings/request
 * Submits a manual booking request (Phase 1 concierge model)
 */
export async function submitBookingRequest(
  data: BookingRequest
): Promise<ApiResponse<{ request_id: string; estimated_confirmation: string }>> {
  try {
    // Phase 1 Mock — replace with real fetch when backend is ready
    await simulateApiDelay(1200);

    // Simulate validation
    if (!data.phone || data.phone.length < 11) {
      return { success: false, errors: { phone: 'Valid Bangladeshi phone number required.' } };
    }

    // Mock successful response
    return {
      success: true,
      data: {
        request_id: `CHO-${Date.now()}`,
        estimated_confirmation: 'Within 2 hours via SMS',
      },
      message: 'Your booking request has been received! We will confirm via SMS within 2 hours.',
    };

    // REAL IMPLEMENTATION (uncomment when backend is live):
    // const response = await fetch(`${BASE_URL}/api/bookings/request`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return await response.json();
  } catch (error) {
    return { success: false, message: 'Network error. Please try again.' };
  }
}

/**
 * GET /api/inventory/search
 * Fetches available operator schedules (manually updated for Phase 1)
 */
export async function searchInventory(
  query: SearchQuery
): Promise<ApiResponse<{ operators: OperatorSchedule[] }>> {
  try {
    await simulateApiDelay(800);

    // Mock inventory data for Phase 1
    const mockOperators: OperatorSchedule[] = [
      {
        operator_id: 'op_lal_sobuj',
        operator_name: 'Lal Sobuj',
        trip_id: 'ls_001',
        date: query.date,
        time: '08:00 PM',
        vehicle_type: 'AC',
        total_seats: 40,
        available_seats: 12,
        price: 650,
        verified: true,
        comfort_score: 4.5,
      },
      {
        operator_id: 'op_himachol',
        operator_name: 'Himachol',
        trip_id: 'hm_001',
        date: query.date,
        time: '10:00 PM',
        vehicle_type: 'AC',
        total_seats: 42,
        available_seats: 8,
        price: 700,
        verified: true,
        comfort_score: 4.7,
      },
      {
        operator_id: 'op_ekaishay',
        operator_name: 'Ekaishay',
        trip_id: 'ek_001',
        date: query.date,
        time: '10:30 PM',
        vehicle_type: 'AC',
        total_seats: 40,
        available_seats: 15,
        price: 620,
        verified: true,
        comfort_score: 4.3,
      },
      {
        operator_id: 'op_royal',
        operator_name: 'Royal',
        trip_id: 'ry_001',
        date: query.date,
        time: '11:00 PM',
        vehicle_type: 'Non-AC',
        total_seats: 44,
        available_seats: 20,
        price: 450,
        verified: false,
        comfort_score: 3.8,
      },
    ];

    return { success: true, data: { operators: mockOperators } };

    // REAL IMPLEMENTATION:
    // const params = new URLSearchParams({ ...query });
    // const response = await fetch(`${BASE_URL}/api/inventory/search?${params}`);
    // return await response.json();
  } catch (error) {
    return { success: false, message: 'Failed to load schedules.' };
  }
}

/**
 * GET /api/audits/{id}
 * Fetches verified audit data for a specific vehicle
 */
export async function getAuditData(
  operatorId: string
): Promise<ApiResponse<AuditData>> {
  try {
    await simulateApiDelay(600);
    return {
      success: true,
      data: {
        audit_id: `aud_${operatorId}`,
        operator_id: operatorId,
        photo_urls: [],
        comfort_metrics: {
          legroom: 'Standard+ (28 inches)',
          ac_type: 'Dual-zone Climate Control',
          seat_type: 'Reclining Pushback',
          cleanliness_score: 4.8,
        },
        auditor_notes: 'Verified on-ground by CHOLO team.',
        audit_date: new Date().toISOString(),
      },
    };
  } catch (error) {
    return { success: false, message: 'Audit data unavailable.' };
  }
}

/**
 * POST /api/waitlist
 * Adds a user to the Phase 1 waitlist
 */
export async function joinWaitlist(
  _data: WaitlistEntry
): Promise<ApiResponse<{ position: number }>> {
  try {
    await simulateApiDelay(900);
    return {
      success: true,
      data: { position: Math.floor(Math.random() * 500) + 100 },
      message: `You're on the list! We'll notify you at launch via SMS.`,
    };
  } catch (error) {
    return { success: false, message: 'Failed to join waitlist.' };
  }
}

// Types
export interface OperatorSchedule {
  operator_id: string;
  operator_name: string;
  trip_id: string;
  date: string;
  time: string;
  vehicle_type: string;
  total_seats: number;
  available_seats: number;
  price: number;
  verified: boolean;
  comfort_score: number;
}

export interface AuditData {
  audit_id: string;
  operator_id: string;
  photo_urls: string[];
  comfort_metrics: {
    legroom: string;
    ac_type: string;
    seat_type: string;
    cleanliness_score: number;
  };
  auditor_notes: string;
  audit_date: string;
}

// Utility
function simulateApiDelay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { BASE_URL };
