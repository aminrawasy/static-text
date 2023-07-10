import { PartialType } from '@nestjs/mapped-types';
import { CreateStaticTextDto } from './create-static_text.dto';

export class UpdateStaticTextDto extends PartialType(CreateStaticTextDto) {}
