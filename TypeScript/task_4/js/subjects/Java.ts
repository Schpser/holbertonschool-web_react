import { Subject } from './Subject';
import { Teacher } from './Teacher';

export interface JavaTeacher extends Teacher {
    experienceTeachingJava?: number;
}

export class Java extends Subject {
    teacher!: JavaTeacher;

    getRequirements(): string {
        return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return "No available teacher";
    }
}
