import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectManagerService {

    private currentSubject;
    public CurrentSubject: BehaviorSubject<object> = new BehaviorSubject<object>(null);
    private materials;
    public Materials: BehaviorSubject<object> = new BehaviorSubject<object>(null);
    constructor() {
        this.materials = this.fetchDataFromApi();
        this.Materials.next(this.materials);
    }

    public SetCurrentSubject(subject) {
        this.currentSubject = subject.name;
        this.CurrentSubject.next(this.currentSubject);
    }
    private fetchDataFromApi() {
        return [
            {
                name: "Course 1",
                pageTitle: "Introduction into whatever",
                contentBlocks: [
                    {type: "header", content: "Lorem Ipsum"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."},
                    {type: "image", content: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
                    {type: "header", content: "Ipsum Lorem"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."},
                    {type: "header", content: "Yaa yeet"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."}
                ]
            },
            {
                name: "Course 2",
                pageTitle: "Stepping stones of whatever",
                contentBlocks: [
                    {type: "header", content: "Lorem Ipsum"},
                    {type: "image", content: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."},
                    {type: "header", content: "Ipsum Lorem"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."},
                    {type: "header", content: "Yaa yeet"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."}
                ]
            },
            {
                name: "Course 3",
                pageTitle: "Advanced whateverthe",
                contentBlocks: [
                    {type: "header", content: "Lorem Ipsum"},
                    {type: "image", content: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."},
                    {type: "header", content: "Ipsum Lorem"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."},
                    {type: "header", content: "Yaa yeet"},
                    {type: "text", content: "This course will be Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed accumsan orci. Nullam scelerisque velit vel augue mattis, tincidunt consectetur risus pretium. Nullam bibendum, neque in porta placerat, ante turpis tincidunt velit, nec viverra orci tellus id massa. Aenean nulla purus, luctus sit amet dignissim ac, efficitur at mi. Ut ullamcorper eget est quis ultricies. Duis eget ipsum dolor. Curabitur vehicula finibus leo, ac gravida metus aliquet in. In vel sapien vitae massa egestas consectetur. Nunc sit amet facilisis turpis. Sed vitae vehicula odio. Ut metus quam, condimentum eu felis ut, semper sagittis quam. Quisque ipsum nisi, iaculis id elit et, pulvinar blandit mi. Aliquam erat volutpat. Proin dapibus varius sem, ut feugiat magna bibendum ut."}
                ]
            }
        ]
    }
    
}
