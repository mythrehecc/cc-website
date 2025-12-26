const API_BASE_URL = 'http://localhost:8000/api';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API request failed: ${error}`);
    }

    // For responses with no content
    if (response.status === 204) {
      return {};
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error('API request error:', error);
    return { error: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
}

// Example API functions
export async function getDemoMessage(): Promise<ApiResponse<{ message: string }>> {
  return apiRequest<{ message: string }>('/demo');
}

// Add more API functions here as needed
