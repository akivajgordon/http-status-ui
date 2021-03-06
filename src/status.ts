export interface Status {
  id: number
  label: string
}

export const statuses: Status[] = [
  { id: 100, label: 'Continue' },
  { id: 101, label: 'Switching Protocols' },
  { id: 102, label: 'Processing' },
  { id: 200, label: 'OK' },
  { id: 201, label: 'Created' },
  { id: 202, label: 'Accepted' },
  { id: 203, label: 'Non-authoritative Information' },
  { id: 204, label: 'No Content' },
  { id: 205, label: 'Reset Content' },
  { id: 206, label: 'Partial Content' },
  { id: 207, label: 'Multi-Status' },
  { id: 208, label: 'Already Reported' },
  { id: 226, label: 'IM Used' },
  { id: 300, label: 'Multiple Choices' },
  { id: 301, label: 'Moved Permanently' },
  { id: 302, label: 'Found' },
  { id: 303, label: 'See Other' },
  { id: 304, label: 'Not Modified' },
  { id: 305, label: 'Use Proxy' },
  { id: 307, label: 'Temporary Redirect' },
  { id: 308, label: 'Permanent Redirect' },
  { id: 400, label: 'Bad Request' },
  { id: 401, label: 'Unauthorized' },
  { id: 402, label: 'Payment Required' },
  { id: 403, label: 'Forbidden' },
  { id: 404, label: 'Not Found' },
  { id: 405, label: 'Method Not Allowed' },
  { id: 406, label: 'Not Acceptable' },
  { id: 407, label: 'Proxy Authentication Required' },
  { id: 408, label: 'Request Timeout' },
  { id: 409, label: 'Conflict' },
  { id: 410, label: 'Gone' },
  { id: 411, label: 'Length Required' },
  { id: 412, label: 'Precondition Failed' },
  { id: 413, label: 'Payload Too Large' },
  { id: 414, label: 'Request-URI Too Long' },
  { id: 415, label: 'Unsupported Media Type' },
  { id: 416, label: 'Requested Range Not Satisfiable' },
  { id: 417, label: 'Expectation Failed' },
  { id: 418, label: "I'm a teapot" },
  { id: 421, label: 'Misdirected Request' },
  { id: 422, label: 'Unprocessable Entity' },
  { id: 423, label: 'Locked' },
  { id: 424, label: 'Failed Dependency' },
  { id: 426, label: 'Upgrade Required' },
  { id: 428, label: 'Precondition Required' },
  { id: 429, label: 'Too Many Requests' },
  { id: 431, label: 'Request Header Fields Too Large' },
  { id: 444, label: 'Connection Closed Without Response' },
  { id: 451, label: 'Unavailable For Legal Reasons' },
  { id: 499, label: 'Client Closed Request' },
  { id: 500, label: 'Internal Server Error' },
  { id: 501, label: 'Not Implemented' },
  { id: 502, label: 'Bad Gateway' },
  { id: 503, label: 'Service Unavailable' },
  { id: 504, label: 'Gateway Timeout' },
  { id: 505, label: 'HTTP Version Not Supported' },
  { id: 506, label: 'Variant Also Negotiates' },
  { id: 507, label: 'Insufficient Storage' },
  { id: 508, label: 'Loop Detected' },
  { id: 510, label: 'Not Extended' },
  { id: 511, label: 'Network Authentication Required' },
  { id: 599, label: 'Network Connect Timeout Error' },
]

export const labelForStatus = (status: number) => {
  const found = statuses.find((s) => s.id === status)

  if (!found) return 'N/A'

  return `${found.id} ??? ${found.label}`
}
