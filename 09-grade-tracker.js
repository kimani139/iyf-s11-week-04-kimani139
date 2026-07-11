console.log("\n=== Mini-Project: Student Grade Tracker ===");

function round2(num) {
    return Math.round(num * 100) / 100;
}

const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find((s) => s.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const values = Object.values(student.grades);
        const avg = values.reduce((total, g) => total + g, 0) / values.length;
        return round2(avg);
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const withSubject = this.students.filter(
            (s) => s.grades[subject] !== undefined
        );
        if (withSubject.length === 0) return null;
        const avg =
            withSubject.reduce((total, s) => total + s.grades[subject], 0) /
            withSubject.length;
        return round2(avg);
    },

    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, current) => {
            const topAvg = this.getStudentAverage(top.name);
            const currentAvg = this.getStudentAverage(current.name);
            return currentAvg > topAvg ? current : top;
        });
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(
            (s) => this.getStudentAverage(s.name) < 70
        );
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `No student found named "${name}"`;

        const average = this.getStudentAverage(name);
        const letter = this.getLetterGrade(average);

        let report = `Report Card for ${student.name}\n`;
        report += "--------------------------------\n";
        for (const [subject, grade] of Object.entries(student.grades)) {
            report += `${subject}: ${grade} (${this.getLetterGrade(grade)})\n`;
        }
        report += "--------------------------------\n";
        report += `Average: ${average} (${letter})`;

        return report;
    },
};

// Test implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));   // 91.67
console.log(gradeTracker.getSubjectAverage("math"));    // 75.67
console.log(gradeTracker.getTopStudent());              // Alice's record
console.log(gradeTracker.getStrugglingStudents());      // [Charlie]
console.log(gradeTracker.generateReportCard("Alice"));
