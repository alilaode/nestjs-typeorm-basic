import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {

  constructor(
    @InjectRepository(Blog)
    private readonly blogsRepository: Repository<Blog>,
  ) {}

  create(createBlogDto: CreateBlogDto) {
    const blog = new Blog();
    blog.blogName = createBlogDto.blogName;
    blog.blogUrl = createBlogDto.blogUrl;
    return this.blogsRepository.save(blog);
  }

  findAll() {
    return this.blogsRepository.find();
  }

  findOne(id: number) {
    return this.blogsRepository.findOneBy({ id: id });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  async remove(id: number) {
    await this.blogsRepository.delete(id);
  }
}
