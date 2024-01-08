class Burung{
    private kaki: number = 2

    getKaki(): number{
        return this.kaki
    }

    Terbang(): void{
        console.log(`Terbang`)
    }

    async makan(): Promise<string> {
        return "STRING"
    }
}