
export const harshLogger = (message, data = null) => {
  const log = {
    timestamp: new Date().toISOString(),
    message,
    data,
  };
  localStorage.setItem(`log-${Date.now()}`, JSON.stringify(log));
};
