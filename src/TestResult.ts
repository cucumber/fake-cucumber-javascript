import { messages } from 'cucumber-messages'
import Duration from './Duration'

export default class TestResult {
  public constructor(
    public readonly status: messages.TestResult.Status,
    private readonly message: string
  ) {}

  public toMessage(): messages.ITestResult {
    return new messages.TestResult({
      status: this.status,
      message: this.message,
      duration: new Duration(123, 456).toMessage()
    })
  }
}