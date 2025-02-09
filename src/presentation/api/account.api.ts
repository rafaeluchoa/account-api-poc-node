import { CreateRequestDto } from '../rest/dto/create.request.dto';
import { CreateResponseDto } from '../rest/dto/create.response.dto';

export interface AccountApi {
  create(req: CreateRequestDto): Promise<CreateResponseDto>;
}
