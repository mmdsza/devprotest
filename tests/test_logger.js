const fs = require('fs');
const log_message = require('./logger');

jest.mock('fs');
fs.appendFileSync.mockImplementation(() => {});

describe('log_message function', () => {
  afterEach(() => {
    fs.appendFileSync.mockClear();
  });

  it('logs an INFO message to the file', () => {
    log_message('application.log', 'User logged in', 'INFO');
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      'application.log',
      expect.stringContaining('[INFO] User logged in')
    );
  });

  it('logs a WARNING message to the file', () => {
    log_message('application.log', 'Failed login attempt', 'WARNING');
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      'application.log',
      expect.stringContaining('[WARNING] Failed login attempt')
    );
  });

  it('includes a timestamp in the log entry', () => {
    log_message('application.log', 'Test message', 'INFO');
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      'application.log',
      expect.stringMatching(/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] \[INFO\] Test message/)
    );
  });
});