import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BusinessException } from '../../core/exception/BusinessException';
import { ResponseDto } from '../../presentation/rest/dto/response.dto';

@Catch()
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code = status.toString();

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      code = status.toString();
    }
    if (exception instanceof BusinessException) {
      status = HttpStatus.BAD_REQUEST;
      code = exception.code;
    }

    const resp = {
      code: code,
      message: exception.message || 'Internal Error',
    } as ResponseDto;
    const error = `Error: code: ${resp.code} message: ${resp.message}`;
    if (status == HttpStatus.BAD_REQUEST) {
      console.warn(error);
    } else {
      console.error(error);
    }
    response.status(status).json(resp);
  }
}
